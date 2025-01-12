export function Input({
    onChange,
    placeholder,
  }: {
    placeholder: string;
    onChange: () => void;
  }) {
    return (
      <div>
        <input
          placeholder={placeholder}
          type="text"
          className="px-4 py-2 border rounded margin-2"
          onChange={onChange}
        />
      </div>
    );
  }
  