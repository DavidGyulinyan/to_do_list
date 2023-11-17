import ItemList from './ItemList';

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
    
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            )
                : (
                    <p>Your list is empty</p>
                )
            }
        </main>
    )
}

export default Content;
