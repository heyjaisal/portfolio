import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axios';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState([]);
  const [homeCards, setHomeCards] = useState([]);

  // Edit states
  const [editingCard, setEditingCard] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/contact');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      const [pRes, cRes] = await Promise.all([
        axiosInstance.get('/projects'),
        axiosInstance.get('/home-cards'),
      ]);
      setProjects(pRes.data);
      setHomeCards(cRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  // --- DELETE HANDLERS ---
  const deleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await axiosInstance.delete(`/projects/${id}`);
      fetchData();
    }
  };

  const deleteCard = async (id) => {
    if (window.confirm("Are you sure you want to delete this home card?")) {
      await axiosInstance.delete(`/home-cards/${id}`);
      fetchData();
    }
  };

  // --- SAVE HANDLERS ---
  const saveProject = async (e) => {
    e.preventDefault();
    // Clean up empty lines from the arrays before saving
    const payload = {
      ...editingProject,
      features: editingProject.features?.filter(f => typeof f === 'string' && f.trim() !== '') || [],
      techStack: editingProject.techStack?.filter(t => typeof t === 'string' && t.trim() !== '') || []
    };
    if (editingProject._id) {
      await axiosInstance.put(`/projects/${editingProject._id}`, payload);
    } else {
      await axiosInstance.post('/projects', payload);
    }
    setEditingProject(null);
    fetchData();
  };

  const saveCard = async (e) => {
    e.preventDefault();
    if (editingCard._id) {
      await axiosInstance.put(`/home-cards/${editingCard._id}`, editingCard);
    } else {
      await axiosInstance.post('/home-cards', editingCard);
    }
    setEditingCard(null);
    fetchData();
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-32 pb-20 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-full hover:bg-red-500/20 transition-all font-medium text-sm"
          >
            Logout
          </button>
        </div>
        
        {/* --- EDIT CARD MODAL/FORM --- */}
        {editingCard && (
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-8">
            <h2 className="text-xl font-bold mb-4">{editingCard._id ? 'Edit Home Card' : 'Add Home Card'}</h2>
            <form onSubmit={saveCard} className="space-y-4">
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingCard.title} onChange={e => setEditingCard({...editingCard, title: e.target.value})} placeholder="Title" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingCard.img} onChange={e => setEditingCard({...editingCard, img: e.target.value})} placeholder="Image URL" />
              <div className="flex gap-4">
                <button type="submit" className="bg-yellow-300 text-black px-6 py-2 rounded font-bold">Save</button>
                <button type="button" onClick={() => setEditingCard(null)} className="bg-gray-600 px-6 py-2 rounded">Cancel</button>
              </div>
            </form>
          </div>
        )}

        {/* --- EDIT PROJECT MODAL/FORM --- */}
        {editingProject && (
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-8">
            <h2 className="text-xl font-bold mb-4">{editingProject._id ? 'Edit Project' : 'Add Project'}</h2>
            <form onSubmit={saveProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.title} onChange={e => setEditingProject({...editingProject, title: e.target.value})} placeholder="Title" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.year} onChange={e => setEditingProject({...editingProject, year: e.target.value})} placeholder="Year" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.tags} onChange={e => setEditingProject({...editingProject, tags: e.target.value})} placeholder="Tags" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.number} onChange={e => setEditingProject({...editingProject, number: e.target.value})} placeholder="Number (e.g. 01)" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded md:col-span-2" value={editingProject.imgSrc} onChange={e => setEditingProject({...editingProject, imgSrc: e.target.value})} placeholder="Image URL" />
              <textarea className="w-full bg-black/50 border border-white/20 p-3 rounded md:col-span-2" rows="3" value={editingProject.description} onChange={e => setEditingProject({...editingProject, description: e.target.value})} placeholder="Description"></textarea>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400 font-semibold px-1">Features (one per line)</label>
                <textarea className="w-full bg-black/50 border border-white/20 p-3 rounded" rows="4" value={editingProject.features?.join('\n')} onChange={e => setEditingProject({...editingProject, features: e.target.value.split('\n')})} placeholder="Feature 1&#10;Feature 2"></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400 font-semibold px-1">Tech Stack (one per line)</label>
                <textarea className="w-full bg-black/50 border border-white/20 p-3 rounded" rows="4" value={editingProject.techStack?.join('\n')} onChange={e => setEditingProject({...editingProject, techStack: e.target.value.split('\n')})} placeholder="React&#10;Node.js"></textarea>
              </div>

              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.githubLink} onChange={e => setEditingProject({...editingProject, githubLink: e.target.value})} placeholder="GitHub URL" />
              <input className="w-full bg-black/50 border border-white/20 p-3 rounded" value={editingProject.websiteLink} onChange={e => setEditingProject({...editingProject, websiteLink: e.target.value})} placeholder="Live Website URL" />
              <div className="flex gap-4 md:col-span-2 mt-2">
                <button type="submit" className="bg-yellow-300 text-black px-6 py-2 rounded font-bold">Save</button>
                <button type="button" onClick={() => setEditingProject(null)} className="bg-gray-600 px-6 py-2 rounded">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HOME CARDS LIST */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-300">Home Cards</h2>
              <button 
                onClick={() => setEditingCard({ title: '', img: '' })} 
                className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded hover:bg-green-500/40 text-sm font-semibold"
              >
                + Add Card
              </button>
            </div>
            <div className="space-y-4">
              {homeCards.map(card => (
                <div key={card._id} className="flex justify-between items-center bg-black/50 p-4 rounded border border-white/10">
                  <div className="flex items-center gap-4">
                    <img src={card.img} alt={card.title} className="w-12 h-12 object-cover rounded" />
                    <span className="font-semibold">{card.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingCard(card)} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded hover:bg-blue-500/40">Edit</button>
                    <button onClick={() => deleteCard(card._id)} className="text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500/40">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS LIST */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-300">Projects</h2>
              <button 
                onClick={() => setEditingProject({ 
                  title: '', year: '', tags: '', number: '', imgSrc: '', 
                  description: '', githubLink: '', websiteLink: '', 
                  features: [], techStack: [] 
                })} 
                className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded hover:bg-green-500/40 text-sm font-semibold"
              >
                + Add Project
              </button>
            </div>
            <div className="space-y-4">
              {projects.map(proj => (
                <div key={proj._id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-black/50 p-4 rounded border border-white/10 gap-4">
                  <div>
                    <span className="text-xs text-gray-500 font-mono mr-2">{proj.number}</span>
                    <span className="font-semibold">{proj.title}</span>
                    <div className="text-xs text-gray-400 mt-1">{proj.tags}</div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => setEditingProject(proj)} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded hover:bg-blue-500/40">Edit</button>
                    <button onClick={() => deleteProject(proj._id)} className="text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500/40">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
