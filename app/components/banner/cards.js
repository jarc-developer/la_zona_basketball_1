export default function Cards ({ children })
{
  return (
    <div className="p-5">
      <div className="bg-slate-900/50 rounded-xl grid grid-cols-3 border border-white">
        {children}
      </div>
    </div>
  )
}