import { ChangeEvent, ReactHTMLElement } from "react";

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

            <div className="flex items-center gap-3 text-slate-500">
                <input
                    type="number"
                    min={2000}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    onBlur={(e) => {
                        const target = Number(e.target.value);
                        if (target < 2000 ) {
                            onChange(2000);
                        }
                    }}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-lg font-semibold outline-none focus:border-sky-500"
                />

                <span className="font-medium text-slate-600">ml</span>
            </div>
        </div>
    )
}