import React from 'react';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Верх: картинка курса (заглушка) */}
      <div>
        <div
          style={{
            width: '100%',
            height: 180,
            backgroundColor: '#eee',
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <p style={{ padding: 16 }}>Здесь будет картинка курса</p>
        </div>

        {/* Текст курса */}
        <h1 style={{ fontSize: 20, marginBottom: 8 }}>
          Название курса
        </h1>
        <p style={{ marginBottom: 16 }}>
          Здесь будет описание курса. Ты потом будешь копировать его из Пампаду.
        </p>

        {/* Кнопка «Открыть курс» */}
        <button
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#2688eb',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            cursor: 'pointer',
          }}
          onClick={() => {
            alert('Здесь позже будет реклама + переход на курс');
          }}
        >
          Открыть курс
        </button>
      </div>

      {/* Низ: место под рекламный баннер VK */}
      <div
        style={{
          marginTop: 16,
          paddingTop: 8,
          borderTop: '1px solid #ddd',
          textAlign: 'center',
          fontSize: 12,
          color: '#888',
        }}
      >
        Здесь VK покажет рекламный баннер снизу
      </div>
    </div>
  );
}

export default App;
