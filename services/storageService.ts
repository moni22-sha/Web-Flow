import { Lead } from '../types';

const STORAGE_KEY = 'webdev_leads_db';

export const getLeads = (): Lead[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load leads', error);
    return [];
  }
};

export const saveLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): boolean => {
  try {
    const currentLeads = getLeads();
    const newLead: Lead = {
      ...leadData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newLead, ...currentLeads]));
    return true;
  } catch (error) {
    console.error('Failed to save lead', error);
    return false;
  }
};

export const updateLeadStatus = (id: string, status: Lead['status']): void => {
  const leads = getLeads();
  const updatedLeads = leads.map(lead => 
    lead.id === id ? { ...lead, status } : lead
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
};

export const deleteLead = (id: string): void => {
  const leads = getLeads();
  const filteredLeads = leads.filter(lead => lead.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredLeads));
};