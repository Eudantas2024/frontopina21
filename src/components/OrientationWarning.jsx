import React, { useEffect, useState } from "react";

const OrientationWarning = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Verifica a orientação inicial
    checkOrientation();

    // Atualiza ao redimensionar
    window.addEventListener("resize", checkOrientation);

    // Limpeza do event listener
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  // Renderiza o aviso somente se estiver em modo paisagem
  if (isLandscape) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#fff",
          color: "#000",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Para melhor visualização, use o dispositivo em modo retrato (vertical).
        </p>
      </div>
    );
  }

  return null;
};

export default OrientationWarning;
