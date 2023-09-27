const newMessage = {
    name: 'Daniel Namur',
    title: 'Desarrollador Full Stack'
};

export const FirstApp = () => {

    return (
        <>
            <h1>{ newMessage.name }</h1>
            <p>{ newMessage.title }</p>
        </>
    )
}