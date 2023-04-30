import { useState } from "react"

export const useField = (type: string) => {
    const [value, setValue] = useState<string>('')
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return {
        type,
        value,
        onChange,
    }
}