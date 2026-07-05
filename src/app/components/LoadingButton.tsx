type Props = {
    onClick: ()=>void
    loading:boolean
    text: string
    buttonTitle:string
}

export default function LoadingButton ({onClick,loading,text,buttonTitle}:Props) {
    return(
         <button
        onClick={onClick}
        className="flex h-14 w-full items-center justify-center rounded-2xl bg-sky-500 font-semibold text-white transition-all hover:bg-sky-600 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >   
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>{text}</span>
          </div>
        ) : (
          buttonTitle
        )} </button>
    )
}