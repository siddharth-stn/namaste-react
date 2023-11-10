const ItemList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
