type ItemProps = {
    number: string,
    h1: number,
    h2: number,
}

export default function TaskItem({ number, h1, h2 }: ItemProps){
    return <div className="item_card">
        <div className="item_num">
            {number}
        </div>
        <div className="item_h1">
            {h1}
        </div>
        <div className="item_h2">
            {h2}
        </div>
    </div>
}