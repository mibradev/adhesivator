export function Input(props) {
  return (
    <input
      className="block w-full rounded-sm bg-slate-600 px-2 py-1 text-slate-200"
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
      className="block w-full rounded-sm bg-emerald-600 p-2 text-center font-bold text-white"
      readOnly
      {...props}
    />
  );
}

export function InputResultSecondary(props) {
  return (
    <InputNumber
      className="block w-full rounded-sm bg-slate-700 px-2 py-1 text-center text-slate-200"
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
