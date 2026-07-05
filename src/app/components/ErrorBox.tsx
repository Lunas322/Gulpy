type props = {
    error: string
} 

export default function ErrrorBox({error}:props) {

    return (
        <div>

            {error && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>
            )}
        </div>
    )
}