import './Principal.css'

const Principal = ({children}) => {
    return (
        <div className="principal">
            <main className='main'>
                {children}
            </main>
            <div className='container'><button className='addButton'>+</button></div>
        </div>
    )
};

export default Principal;