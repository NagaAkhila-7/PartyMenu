import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuData from "../data/menuData";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState({});
  const [selectedDish, setSelectedDish] = useState(null);

  const navigate = useNavigate();

  const filteredDishes = menuData.filter((dish) => {
    const categoryMatch = dish.category === activeCategory;
    const searchMatch = dish.name.toLowerCase().includes(search.toLowerCase());
    const filterMatch = filter === "All" ? true : dish.type === filter;

    return categoryMatch && searchMatch && filterMatch;
  });

  const addDish = (dishId) => {
    setCart((prev) => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1,
    }));
  };

  const removeDish = (dishId) => {
    const qty = cart[dishId] || 0;

    if (qty <= 1) {
      const updated = { ...cart };
      delete updated[dishId];
      setCart(updated);
    } else {
      setCart((prev) => ({
        ...prev,
        [dishId]: qty - 1,
      }));
    }
  };

  const totalSelectedDishes = Object.values(cart).reduce(
    (sum, qty) => sum + qty,
    0,
  );

  const getCategoryCount = (category) => {
    let count = 0;

    Object.entries(cart).forEach(([dishId, qty]) => {
      const dish = menuData.find((item) => item.id === Number(dishId));

      if (dish?.category === category) {
        count += qty;
      }
    });

    return count;
  };

  return (
    <div className="menu-page">
      {/* Search */}

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "52px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "14px",
            padding: "0 16px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              marginRight: "10px",
            }}
          ></span>

          <input
            type="text"
            placeholder="Search dish for your party..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "15px",
              background: "transparent",
            }}
          />
        </div>
      </div>

      {/* Categories */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE - Categories */}

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {["Starter", "Main Course", "Dessert", "Sides"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: activeCategory === category ? "none" : "1px solid #ddd",
                background: activeCategory === category ? "#f59e0b" : "#fff",
                color: activeCategory === category ? "#fff" : "#333",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {category} ({getCategoryCount(category)})
            </button>
          ))}
        </div>

        {/* Desktop Only Actions */}

        <div
          className="desktop-only"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              padding: "10px 16px",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            👤 User
          </div>

          <div
            style={{
              background: "#111827",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "12px",
              fontWeight: "600",
              whiteSpace: "nowrap",
            }}
          >
            🛒 {totalSelectedDishes}
          </div>

          <button
            style={{
              background: "#f97316",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: "12px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            🎧 Support
          </button>
        </div>
      </div>
      {/* Filters */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {["All", "Veg", "Non-Veg"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: filter === item ? "none" : "1px solid #ddd",
              background: filter === item ? "#111827" : "#fff",
              color: filter === item ? "#fff" : "#111",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Selected Row */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        <span>
          {activeCategory} Selected ({getCategoryCount(activeCategory)})
        </span>
      </div>

      {/* Cuisine */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "800",
            }}
          >
            North Indian
          </h2>

          <p
            style={{
              marginTop: "4px",
              color: "#777",
              fontSize: "14px",
            }}
          >
            Handpicked dishes for your event
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="dish-grid">
        {filteredDishes.map((dish) => {
          const quantity = cart[dish.id] || 0;

          return (
            <div
              key={dish.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "16px",
                border: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                gap: "14px",
                minHeight: "160px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {dish.name}
                </h3>

                <p
                  style={{
                    color: "#777",
                    fontSize: "13px",
                    lineHeight: "20px",
                    marginBottom: "14px",
                    maxWidth: "220px",
                  }}
                >
                  {dish.description.slice(0, 45)}...
                  <span
                    onClick={() => setSelectedDish(dish)}
                    style={{
                      color: "#111",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Read more
                  </span>
                </p>

                <p
                  onClick={() => navigate(`/ingredient/${dish.id}`)}
                  style={{
                    color: "#f97316",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  📋 Ingredient
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  style={{
                    width: "105px",
                    height: "105px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />

                {quantity === 0 ? (
                  <button
                    onClick={() => addDish(dish.id)}
                    style={{
                      width: "100px",
                      height: "38px",
                      border: "none",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg,#f97316,#ea580c)",
                      color: "#fff",
                      fontWeight: "700",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
                    }}
                  >
                    + Add
                  </button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100px",
                      height: "38px",
                      background: "#fff",
                      border: "1px solid #f97316",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(249,115,22,0.15)",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => removeDish(dish.id)}
                      style={{
                        width: "32px",
                        height: "100%",
                        border: "none",
                        background: "transparent",
                        color: "#f97316",
                        fontSize: "18px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      −
                    </button>

                    <span
                      style={{
                        fontWeight: "700",
                        color: "#111",
                      }}
                    >
                      {quantity}
                    </span>

                    <button
                      onClick={() => addDish(dish.id)}
                      style={{
                        width: "32px",
                        height: "100%",
                        border: "none",
                        background: "transparent",
                        color: "#f97316",
                        fontSize: "18px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedDish && (
        <div
          onClick={() => setSelectedDish(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "500px",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              padding: "20px",
              animation: "slideUp 0.3s ease",
            }}
          >
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                marginBottom: "15px",
              }}
            />

            <h2>{selectedDish.name}</h2>

            <p
              style={{
                color: "#666",
                marginTop: "10px",
                lineHeight: "24px",
              }}
            >
              {selectedDish.description}
            </p>

            <p
              onClick={() => navigate(`/ingredient/${selectedDish.id}`)}
              style={{
                color: "#f97316",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              📋 Ingredient
            </p>

            <button
              onClick={() => navigate(`/ingredient/${selectedDish.id}`)}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                background: "#111827",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Footer */}

      <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
          padding: "12px 16px",
          boxShadow: "0 -4px 12px rgba(0,0,0,0.05)",
        }}
      >
        {/* Summary Row */}

        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "14px 18px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              color: "#111827",
            }}
          >
            Total Dishes Selected
          </span>

          <span
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "#f97316",
            }}
          >
            {totalSelectedDishes}
          </span>
        </div>

        {/* Continue Button */}

        <button
          disabled={totalSelectedDishes === 0}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "14px",
            background:
              totalSelectedDishes === 0
                ? "#d1d5db"
                : "linear-gradient(135deg,#111827,#000)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "700",
            cursor: totalSelectedDishes === 0 ? "not-allowed" : "pointer",
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default MenuPage;
