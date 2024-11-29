export function Input(props) {
  return (
    <input
      className="block px-2 py-1 w-full rounded-sm bg-slate-600 text-slate-200"
      {...props}
    />
  );
}

export function InputNumber(props) {
  return <Input type="number" min={0} {...props} />;
}

export function InputResult(props) {
  return (
    <InputNumber
      className="block p-2 w-full rounded-sm bg-emerald-600 text-white text-center font-bold"
      readOnly
      {...props}
    />
  );
}

export function InputResultSecondary(props) {
  return (
    <InputNumber
      className="block px-2 py-1 w-full rounded-sm bg-slate-700 text-slate-200 text-center"
      readOnly
      {...props}
    />
  );
}

export function Label(props) {
  return (
    <label className="block text-slate-400" {...props}>
      {props.children}
    </label>
  );
}
