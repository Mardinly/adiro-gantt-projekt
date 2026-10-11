<script>
  import { activeProjectStats } from '../stores/projectStore.js';

  function handleAddFolder() {
    alert("Neue Aufgabe hinzufügen");
  }

  function handlePDFExport() {
    window.print();
  }
</script>

<header class="header">
  <div class="brand">
    <div class="logo-box">
      <span class="logo-text">A</span>
      <span class="sub-logo">ADIRO</span>
    </div>
    <h2>Adiro Projektmanagement Gantt</h2>
  </div>

  <div class="actions">
    <button class="btn btn-secondary" on:click={handlePDFExport}>PDF Kundenplan</button>
    <button class="btn btn-primary" on:click={handleAddFolder}>+ Aufgabe</button>
  </div>
</header>

<style>
  .header {
    background: #0f172a;
    color: #ffffff;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo-box {
    background: #ffffff;
    color: #0f172a;
    border-radius: 8px;
    padding: 4px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;
    line-height: 1;
  }

  .logo-text {
    font-size: 20px;
    color: #2563eb;
  }

  .sub-logo {
    font-size: 8px;
    letter-spacing: 1px;
    font-weight: 800;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  .btn {
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-primary {
    background: #4f46e5;
    color: #ffffff;
  }

  .btn-primary:hover {
    background: #4338ca;
  }

  .btn-secondary {
    background: #ffffff;
    color: #0f172a;
  }

  .btn-secondary:hover {
    background: #f1f5f9;
  }
</style>