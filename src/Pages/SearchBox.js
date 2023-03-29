import React from 'react'

const SearchBox = ({onSearch}) => {
    const handleSearch = (event)=>{
        onSearch(event.target.value)
    }

    const styles = {
        input: {
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            width: '100%',
            fontSize: '16px'
        }
    }

    return (
        <div>
            <input type="text" placeholder='Search by name or Category ...' onChange={handleSearch} style={styles.input} />
        </div>
    )
}

export default SearchBox
