import React, { useEffect, useState } from 'react';
import { getLeads, deleteLead, updateLeadStatus } from '../services/storageService';
import { Lead } from '../types';
import { Trash2, Phone, Mail, Clock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simple session storage persistence for demo
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadLeads();
    }
  }, []);

  const loadLeads = () => {
    const data = getLeads();
    // Sort by newest first
    setLeads(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') { // Simple hardcoded password for demo
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      loadLeads();
    } else {
      alert('Incorrect password (hint: 1234)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteLead(id);
      loadLeads();
    }
  };

  const toggleStatus = (lead: Lead) => {
    const newStatus = lead.status === 'new' ? 'contacted' : lead.status === 'contacted' ? 'closed' : 'new';
    updateLeadStatus(lead.id, newStatus);
    loadLeads();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter password"
              />
              <p className="text-xs text-slate-400 mt-1">Hint: 1234</p>
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Access Dashboard
            </button>
          </form>
          <div className="mt-4 text-center">
             <button onClick={() => navigate('/')} className="text-sm text-slate-500 hover:text-indigo-600">Back to Website</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Lead Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
             <h2 className="font-semibold text-slate-700">Total Leads: {leads.length}</h2>
             <button onClick={loadLeads} className="text-indigo-600 text-sm hover:underline">Refresh List</button>
          </div>
          
          {leads.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
                <Mail size={32} />
              </div>
              <p className="text-lg">No leads found yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                           <Clock size={14} />
                           {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-slate-400 pl-5">
                          {new Date(lead.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">{lead.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col space-y-1">
                          <a href={`mailto:${lead.email}`} className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                            <Mail size={12} /> {lead.email}
                          </a>
                          <a href={`tel:${lead.phone}`} className="text-sm text-slate-600 hover:text-indigo-600 flex items-center gap-1">
                            <Phone size={12} /> {lead.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-700 max-w-xs truncate" title={lead.message}>
                          {lead.message || <span className="text-slate-400 italic">No message</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => toggleStatus(lead)}
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)} cursor-pointer hover:opacity-80`}
                        >
                          {lead.status.toUpperCase()}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleDelete(lead.id)}
                          className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;