import React from 'react'

function SelectInput({ label, multiple, placeHolder, key, choises }) {
    return (
        <div className="mt-3">
            <label htmlFor={`post-select-${key}`} className="form-label">{label}</label>
            <select data-placeholder={placeHolder} className="tail-select w-full" id={`post-select-${key}`} multiple={multiple}>
                {choises}
            </select>
        </div>
    )
}

export default SelectInput
