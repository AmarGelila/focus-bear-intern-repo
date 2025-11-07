// ❌ Unclear component
const Comp = ({ d, l, onC }) => {
  const [s, setS] = useState([]);
  const [v, setV] = useState(false);

  const h = async () => {
    setV(true);
    try {
      const r = await fetch("/api");
      const j = await r.json();
      setS(j);
    } catch (e) {
      console.log(e);
    } finally {
      setV(false);
    }
  };

  return (
    <div>
      {l && <button onClick={onC}>Close</button>}
      {v && <p>Loading...</p>}
      {s.map((i) => (
        <div key={i.id}>{i.n}</div>
      ))}
    </div>
  );
};

// Clear component
const ItemsList = ({ showCloseButton, handleClose }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api");
      const itemsData = await itemsData.json();
      setItems(j);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showCloseButton && <button onClick={handleClose}>Close</button>}
      {isLoading && <p>Loading...</p>}
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
