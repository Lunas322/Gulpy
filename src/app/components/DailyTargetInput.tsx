type Props = {
    value: number;
    onChange: (value: number) => void;
};

export default function DailyTargetInput({ value, onChange }: Props) {

    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
                하루 목표량
            </label>

            <div className="flex items-center gap-3">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-lg font-semibold outline-none focus:border-sky-500"
                />

                <span className="font-medium text-slate-600">ml</span>
            </div>
        </div>
    )
}