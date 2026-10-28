type TasItemProps = {
    id: string,
    title: string,
    done: boolean,
}

export default function TaskItem({ id, title, done }: TasItemProps){
    return <p>{id} {title}{done}</p>
}