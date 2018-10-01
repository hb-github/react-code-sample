export const methodHandler = (method: string, data?: any) => {
    if (method == "POST") {
        return {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    } else {
        return {
            method: `${method}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
    }
}