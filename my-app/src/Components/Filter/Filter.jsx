import React from "react";

export const Filter = ({onChange, value}) => {
    return (
        <div>
            <label>
                Search:
                <input
                type="text"
                    value={value} 
                    onChange={onChange}
                />
            </label>
        </div>
    )
}