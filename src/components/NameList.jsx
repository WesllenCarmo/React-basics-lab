function NameList() {
  const items = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name:  "Charlie"}
  ]
  return (
    <div>
      {items.map(item => (
          <ul>
            <li key={item.id}>{item.name}</li>
          </ul> 
      ))}
      <p>Using an unique identifier item.id for each list item is a good practice to ensure React can efficiently update the DOM when items are added, removed, or reordered.</p>
    </div>
  )
}
export default NameList;