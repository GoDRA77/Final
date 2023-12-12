import React, {  useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'


import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";
const SearchBarComponent = () => {
    const [selectedItem, setSelectedItem] = useState | null>('')
    const navigate = useNavigate()
    const assetsArray = useSelector(
        (state) => state.assets.assets,
    )

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                value={selectedItem}
                onChange={( ) => {
                    navigate(`single/${value}`)
                    setSelectedItem(null)
                }}
                renderInput={(element) => (
                    <TextField

                        label="Поиск"
                        InputProps={{
                            ...element.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                options={assetsArray.map(
                    (element   ) => element,
                )}
            />
        </Stack>
    )
}

export default SearchBarComponent