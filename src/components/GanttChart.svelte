<script>
  import { projects, activeProjectId } from '../stores/projectStore.js';
  export let totalDays = 31;

  $: currentProject = $projects.find(p => p.id === $activeProjectId) || $projects[0];
  $: startDate = currentProject?.startDate ? new Date(currentProject.startDate) : new Date();

  $: daysArray = Array.from({ length: totalDays }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    return {
      dayNum: d.getDate(),
      month: d.toLocaleDateString('de-DE', { month: 'short' }),
      weekday: d.toLocaleDateString('de-DE', { weekday: 'short' }),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    };
  });

  function getStatusClass(status) {
    switch(status) {
      case 'done': return 'done';
      case 'work': return 'work';
      case 'critical': return 'critical';
      default: return 'todo';
    }
  }
</script>

<div class="gantt">
  <div class="grid" style="--days: {totalDays};">
    <div class="row head">
      <div class="cell label">Aufgabe / Projekt-Struktur</div>
      {#each daysArray as day}
        <div class="cell day" class:weekend={day.isWeekend}>
          <span class="day-num">{day.dayNum}</span>
          <span class="day-sub">{day.month}</span>
        </div>
      {/each}
    </div>

    {#each currentProject.tasks as task (task.id)}
      <div class="row">
        <div class="cell label">
          <div class="tasktitle">{task.title}</div>
          <div class="prog"><i style="width: {task.progress}%"></i></div>
        </div>
        {#each daysArray as day}
          <div class="cell" class:weekend={day.isWeekend}></div>
        {/each}
        <div class="taskbar {getStatusClass(task.status)}" style="left: calc(370px + {(task.start - 1)} * minmax(34px, 1fr)); width: calc({task.duration} * minmax(34px, 1fr));">
          <span>{task.title} ({task.progress}%)</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .gantt { background: #fff; border: 1px solid #e3e8f0; border-radius: 12px; overflow: auto; position: relative; max-width: 100%; }
  .grid { display: grid; grid-template-columns: 370px repeat(var(--days), minmax(34px, 1fr)); min-width: 1500px; }
  .cell { border-right: 1px solid #edf0f4; min-height: 48px; }
  .label { position: sticky; left: 0; z-index: 9; background: #fff; border-right: 1px solid #e3e8f0; padding: 8px 12px; }
  .head { position: sticky; top: 0; z-index: 10; background: #fafbfe; }
  .head .label { background: #fafbfe; }
  .day { text-align: center; padding: 6px 0; font-size: 10px; color: #68758a; display: flex; flex-direction: column; justify-content: center; }
  .day-num { font-weight: 700; font-size: 11px; color: #1e293b; }
  .day-sub { font-size: 9px; color: #94a3b8; }
  .weekend { background: #f8fafc; }
  .row { position: relative; display: contents; }
  .taskbar { position: absolute; top: 12px; height: 25px; border-radius: 7px; color: #fff; padding: 5px 8px; font-size: 11px; white-space: nowrap; overflow: hidden; box-shadow: 0 2px 5px #0002; z-index: 4; }
  .todo { background: #94a3b8; }
  .work { background: #2563eb; }
  .critical { background: #dc2626; }
  .done { background: #16a34a; }
  .tasktitle { font-weight: 700; font-size: 12px; }
  .prog { height: 4px; background: #e8ecf2; border-radius: 4px; margin-top: 6px; }
  .prog i { display: block; height: 100%; background: #635bff; border-radius: 4px; }
</style>