<script lang="ts">
    export let progress = '80';
    export let size = '100';
    export let color = '#F92';
    export let bgcolor = "#fff";
    export let borderColor = '#eee';
    export let borderWeight = '10';
    export let borderRadius = "50";
    export let textColor = "#000";
    export let labelText = "";
    export let customContent = "false";
</script>

<div class="bsprogress" style="--size:{size}px;--weight:{borderWeight}px;--color:{color};--border:{borderColor};--background:{bgcolor};--progress:{progress};--textcolor:{textColor};--borderradius:{borderRadius}%">
    {#if customContent.toLowerCase()=="false"}
        {progress}%
        {#if labelText.length > 0}
            <span class="bsprogresslabel">{labelText}</span>
        {/if}    
    {/if}    
    <slot />
</div>

<style>
  div.bsprogress {
  width: var(--size);
  height: var(--size);
  box-sizing: border-box;
  background: linear-gradient(var(--background), var(--background)), conic-gradient(var(--color) calc(var(--progress) * 1%), var(--border) calc(var(--progress) * 1%));
  background-origin: border-box;
  background-clip: content-box, border-box;
  border: var(--weight) solid transparent;
  border-radius: var(--borderradius);
  color: var(--textcolor);
  font-size: calc((var(--size) - var(--weight)) / 4.5);
  display: grid;
  place-items: center;
  place-content: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}

span.bsprogresslabel {
    font-size: .55em
}
</style>
