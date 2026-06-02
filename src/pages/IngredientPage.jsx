import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";

function IngredientPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = menuData.find((item) => item.id === Number(id));

  if (!dish) {
    return <h2>Dish Not Found</h2>;
  }

  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "18px 24px",
            borderBottom: "1px solid #eee",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ←
          </button>

          <h3
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            Ingredient List
          </h3>
        </div>

        {/* Dish Info */}

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "24px",
            padding: "30px",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: isMobile ? "28px" : "34px",
                fontWeight: "700",
              }}
            >
              {dish.name}
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "26px",
                marginBottom: "16px",
              }}
            >
              {dish.description}
            </p>

            <p
              style={{
                color: "#888",
                fontSize: "14px",
                margin: 0,
              }}
            >
              For 2 people
            </p>
          </div>

          <img
            src={dish.image}
            alt={dish.name}
            style={{
              width: isMobile ? "100%" : "220px",
              height: isMobile ? "220px" : "160px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>

        {/* Ingredients Section */}

        <div
          style={{
            padding: "0 30px 30px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Ingredients
          </h3>

          {dish.ingredients.map((ingredient, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span
                style={{
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                {ingredient.name}
              </span>

              <span
                style={{
                  color: "#666",
                  fontWeight: "600",
                }}
              >
                {ingredient.quantity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientPage;
