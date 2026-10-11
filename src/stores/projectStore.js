import { writable, derived } from 'svelte/store';

export const projects = writable([
  {
    id: 1,
    name: 'Automatisierte Robotikzelle',
    category: 'Kundenprojekt · Sondermaschinenbau',
    startDate: '2026-03-01',
    tasks: [
      { id: 101, title: 'Analyse & Konzeption', start: 1, duration: 5, progress: 100, status: 'done' },
      { id: 102, title: 'Mechanische Konstruktion', start: 4, duration: 8, progress: 50, status: 'work' },
      { id: 103, title: 'SPS-Programmierung', start: 10, duration: 10, progress: 10, status: 'critical' },
      { id: 104, title: 'Montage & Verdrahtung', start: 18, duration: 7, progress: 0, status: 'todo' },
      { id: 105, title: 'Inbetriebnahme & Test', start: 24, duration: 6, progress: 0, status: 'todo' }
    ]
  }
]);

export const activeProjectId = writable(1);
export const viewMode = writable('day'); // 'day' oder 'week'
export const activeTab = writable('gantt'); // 'gantt', 'dashboard', 'ressourcen'
export const searchQuery = writable('');

// Berechnete Werte (KPIs) für das aktives Projekt
export const activeProjectStats = derived(
  [projects, activeProjectId],
  ([$projects, $activeProjectId]) => {
    const proj = $projects.find(p => p.id === $activeProjectId) || $projects[0];
    if (!proj || !proj.tasks.length) return { progress: 0, total: 0, critical: 0, overdue: 0 };

    const total = proj.tasks.length;
    const critical = proj.tasks.filter(t => t.status === 'critical').length;
    const overdue = proj.tasks.filter(t => t.status === 'overdue' || (t.progress < 100 && t.status === 'critical')).length;
    
    const sumProgress = proj.tasks.reduce((acc, t) => acc + (t.progress || 0), 0);
    const progress = Math.round(sumProgress / total);

    return { progress, total, critical, overdue, name: proj.name, category: proj.category };
  }
);