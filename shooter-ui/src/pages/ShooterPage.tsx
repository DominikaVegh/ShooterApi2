import { useEffect, useState } from "react";
import type { Shooter } from "../models/Shooter";
import {
  getShooters,
  createShooter,
  deleteShooter,
  updateShooter,
} from "../api/shooterApi";

const emptyForm = {
  firstName: "",
  lastName: "",
  nationality: "",
  dateOfBirth: "",
  discipline: "",
};

export default function ShooterPage() {
  const [shooters, setShooters] = useState<Shooter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    loadShooters();
  }, []);

  const loadShooters = async () => {
    try {
      const data = await getShooters();
      setShooters(data);
    } catch {
      setError("Failed to load shooters");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this shooter?")) return;

    await deleteShooter(id);
    setShooters(prev => prev.filter(s => s.id !== id));
  };

  const handleEdit = (shooter: Shooter) => {
    setEditingId(shooter.id);
    setForm({
      firstName: shooter.firstName,
      lastName: shooter.lastName,
      nationality: shooter.nationality,
      discipline: shooter.discipline,
      dateOfBirth: shooter.dateOfBirth.substring(0, 10),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId === null) {
      const newShooter = await createShooter(form);
      setShooters(prev => [...prev, newShooter]);
    } else {
      const updatedShooter = { id: editingId, ...form };
      await updateShooter(updatedShooter);
      setShooters(prev =>
        prev.map(s => (s.id === editingId ? updatedShooter : s))
      );
    }

    setForm(emptyForm);
    setEditingId(null);
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Shooters</h1>

      {/* ADD / EDIT FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-5 gap-2"
      >
        <input
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="nationality"
          placeholder="Nationality"
          value={form.nationality}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="discipline"
          placeholder="Discipline"
          value={form.discipline}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded md:col-span-5"
        >
          {editingId === null ? "Add shooter" : "Update shooter"}
        </button>
      </form>

      {/* TABLE */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">First name</th>
            <th className="border p-2">Last name</th>
            <th className="border p-2">Nationality</th>
            <th className="border p-2">Discipline</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shooters.map(shooter => (
            <tr key={shooter.id}>
              <td className="border p-2">{shooter.firstName}</td>
              <td className="border p-2">{shooter.lastName}</td>
              <td className="border p-2">{shooter.nationality}</td>
              <td className="border p-2">{shooter.discipline}</td>
              <td className="border p-2 text-center space-x-2">
                <button
                  onClick={() => handleEdit(shooter)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(shooter.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {shooters.length === 0 && (
            <tr>
              <td colSpan={5} className="border p-4 text-center text-gray-500">
                No shooters found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
