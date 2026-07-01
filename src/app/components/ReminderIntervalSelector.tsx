type Props = {
    value: number;
    onChange: (value: number) => void;
};

export default function ReminderIntervalSelector({ value, onChange }: Props) {
    const intervals = [30, 60, 90];
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
                알림 주기
            </label>

            <div className="grid grid-cols-3 gap-3">
                {intervals.map((minute) => (
                    <label
                        key={minute}
                        className={`
        cursor-pointer rounded-xl border py-3 text-center font-semibold transition
        ${value === minute
                                ? "border-sky-500 bg-sky-500 text-white"
                                : "border-slate-200 text-slate-600 hover:border-sky-300"
                            }
    `}
                    >
                        <input
                            type="radio"
                            name="interval"
                            value={minute}
                            checked={value === minute}
                            onChange={(e) => onChange(Number(e.target.value))}
                            className="sr-only"
                        />
                        {minute}분
                    </label>
                ))}
            </div>
        </div>
    )
}