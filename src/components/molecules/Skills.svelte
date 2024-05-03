<script lang="ts">
  export let skills: string[];

  let showHiddenSkills = false;

  const N_VISIBLE_ITEMS = 4;
  const visibleSkills = skills.slice(0, N_VISIBLE_ITEMS);
  const hiddenSkills = skills.slice(N_VISIBLE_ITEMS + 1);

  const toggle = () => {
    showHiddenSkills = !showHiddenSkills;
  };
</script>

<ul>
  {#each visibleSkills as skill}
    <li>{skill}</li>
  {/each}

  {#if hiddenSkills.length > 0 && !showHiddenSkills}
    <li>
      <button type="button" on:click={toggle}>+{hiddenSkills.length}</button>
    </li>
  {/if}

  {#if showHiddenSkills}
    {#each hiddenSkills as skill}
      <li>{skill}</li>
    {/each}
  {/if}
</ul>

<style>
  ul {
    padding-block-start: var(--space-2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    font-size: var(--font-size-2);
    padding-inline: var(--space-2);
    border-radius: var(--radius-6);
    color: var(--text-color-muted);
    opacity: 0.9;
  }

  button {
    margin: 0;
    padding: 0;
    color: var(--text-color-muted);
    background-color: transparent;
  }

  li:hover:has(button) {
    opacity: 1;
    background-color: var(--background-color);
    color: var(--text-color);
  }
</style>
