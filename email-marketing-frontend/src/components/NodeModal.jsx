import React from 'react';

function NodeModal({ nodeData, isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [formData, setFormData] = React.useState(nodeData?.data || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(nodeData.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h3 className="text-xl mb-4">Edit Node</h3>
        <label className="block mb-2">
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject || ''}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
          Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded ml-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NodeModal;
