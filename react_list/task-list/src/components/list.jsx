import Item from "./item";

export default function List({tasks}){
     console.log(tasks);
    return (
        <ul>
            {tasks.map(item => <Item key={item.id} {...item} />)}
        </ul>
    )
}