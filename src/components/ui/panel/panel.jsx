function Panel({mode = `secondary`,className= "", children}) {
    return (
        <>
            <div className={`bg-${mode}-subtle p-3 rounded ${className}`}>  
                {children} 
            </div>
            </>
    )
}
export default Panel;