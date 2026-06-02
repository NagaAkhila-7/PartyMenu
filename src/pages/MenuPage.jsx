import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuData from "../data/menuData";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  const navigate = useNavigate();

  const filteredDishes = menuData.filter((dish) => {
    const categoryMatch = dish.category === activeCategory;
    const searchMatch = dish.name.toLowerCase().includes(search.toLowerCase());
    const filterMatch = filter === "All" ? true : dish.type === filter;

    return categoryMatch && searchMatch && filterMatch;
  });

  const toggleDish = (dishId) => {
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter((id) => id !== dishId));
    } else {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const getCategoryCount = (category) => {
    return selectedDishes.filter((id) => {
      const dish = menuData.find((item) => item.id === id);
      return dish?.category === category;
    }).length;
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
          >
            🔍
          </span>

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
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "15px",
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

      {/* Filters */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setFilter("Veg")}>🟢 Veg</button>

        <button onClick={() => setFilter("Non-Veg")}>🔴 Non Veg</button>

        <button onClick={() => setFilter("All")}>All</button>
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

        <div
          style={{
            color: "#666",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Total: {selectedDishes.length}
        </div>
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
        <h2>North Indian</h2>
        <span>⌃</span>
      </div>

      {/* Cards */}

      <div className="dish-grid">
        {filteredDishes.map((dish) => {
          const isAdded = selectedDishes.includes(dish.id);

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

                <button
                  onClick={() => toggleDish(dish.id)}
                  style={{
                    width: "90px",
                    height: "36px",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                    background: isAdded ? "#fff1f2" : "#f0fdf4",
                    color: isAdded ? "#ef4444" : "#22c55e",
                  }}
                >
                  {isAdded ? "Remove" : "Add +"}
                </button>
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
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                background: "#f97316",
                color: "#fff",
                fontWeight: "600",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "12px",
            marginBottom: "12px",
            padding: "14px 18px",
            background: "#faf7f2",
            fontWeight: "600",
            fontSize: "16px",
            borderBottom: "1px solid #eee",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          <span>Total Dish Selected</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>{selectedDishes.length}</span>
            <span>›</span>
          </div>
        </div>

        {/* Continue Button */}

        <button
          disabled={selectedDishes.length === 0}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: selectedDishes.length === 0 ? "#d1d5db" : "#1f1f1f",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            borderRadius: "8px",
            fontSize: "15px",
            letterSpacing: "0.3px",
            cursor: selectedDishes.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default MenuPage;
