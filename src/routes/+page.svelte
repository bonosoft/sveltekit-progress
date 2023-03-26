<script>
    import { Progress } from '$lib';
  </script>
  
  <svelte:head>
      <title>Test Progress component</title>
  </svelte:head>
  
  <h1>Progress standard</h1>
  <div class="showingrid">
    <Progress progress="0"/>
    <Progress progress="25"/>
    <Progress progress="50"/>
    <Progress progress="75"/>
    <Progress progress="100"/>
  </div>


  <h1>Darkmode standard</h1>
  <div class="darkmode">

  <div class="showingrid">
    <Progress progress="0"   textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="25"  textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="50"  textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="75"  textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="100" textColor="#eee" bgcolor="#111" borderColor="#333"/>
  </div>
  <br>
  <div class="showingrid">
    <Progress progress="30" color="#29F" textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="40" color="#2F2" textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="50" color="#F92" textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="60" color="#F22" textColor="#eee" bgcolor="#111" borderColor="#333"/>
    <Progress progress="70" color="#92F" textColor="#eee" bgcolor="#111" borderColor="#333"/>
  </div>

  </div>

  <h1>Text color, border color and label text</h1>
  <div class="showingrid">
    <Progress progress="30" color="#29F" textColor="#29F"/>
    <Progress progress="40" textColor="#F22"/>
    <Progress progress="50" textColor="#29F" labelText="Online"/>
    <Progress progress="60" labelText="Backup"/>
    <Progress progress="70" textColor="#292" borderColor="#F22"/>
  </div>


  <h1>Size</h1>
  <div class="showingrid">
    <Progress progress=0 size=30/>
    <Progress progress=25 size=50/>
    <Progress progress=50 size=70/>
    <Progress progress=75 size=90/>
    <Progress progress=100 size=110/>
  </div>


  <h1>Border weight</h1>
  <div class="showingrid">
    <Progress progress=0 borderWeight="1"/>
    <Progress progress=25 borderWeight="3"/>
    <Progress progress=50 borderWeight="8"/>
    <Progress progress=75 borderWeight="15"/>
    <Progress progress=100 borderWeight="20"/>
  </div>

  <h1>Border Radius</h1>
  <div class="showingrid">
    <Progress progress=12.5 borderRadius=0/>
    <Progress progress=25 borderRadius=15/>
    <Progress progress=50 borderRadius=30/>
    <Progress progress=85 borderRadius=40/>
    <Progress progress=100 borderRadius=50/>
  </div>



  <h1>Custom content</h1>
  <div class="showingrid">

  <Progress size="150" progress="50" customContent=true>
    <svg width="100" height="100" viewBox="0 0 24 24"> <path fill="#000" d="M17.55,11.2C17.32,10.9 17.05,10.64 16.79,10.38C16.14,9.78 15.39,9.35 14.76,8.72C13.3,7.26 13,4.85 13.91,3C13,3.23 12.16,3.75 11.46,4.32C8.92,6.4 7.92,10.07 9.12,13.22C9.16,13.32 9.2,13.42 9.2,13.55C9.2,13.77 9.05,13.97 8.85,14.05C8.63,14.15 8.39,14.09 8.21,13.93C8.15,13.88 8.11,13.83 8.06,13.76C6.96,12.33 6.78,10.28 7.53,8.64C5.89,10 5,12.3 5.14,14.47C5.18,14.97 5.24,15.47 5.41,15.97C5.55,16.57 5.81,17.17 6.13,17.7C7.17,19.43 9,20.67 10.97,20.92C13.07,21.19 15.32,20.8 16.93,19.32C18.73,17.66 19.38,15 18.43,12.72L18.3,12.46C18.1,12 17.83,11.59 17.5,11.21L17.55,11.2M14.45,17.5C14.17,17.74 13.72,18 13.37,18.1C12.27,18.5 11.17,17.94 10.5,17.28C11.69,17 12.39,16.12 12.59,15.23C12.76,14.43 12.45,13.77 12.32,13C12.2,12.26 12.22,11.63 12.5,10.94C12.67,11.32 12.87,11.7 13.1,12C13.86,13 15.05,13.44 15.3,14.8C15.34,14.94 15.36,15.08 15.36,15.23C15.39,16.05 15.04,16.95 14.44,17.5H14.45Z" /> </svg>
  </Progress>  

  <Progress size="150" progress="50" customContent="true">
    Text
    </Progress>  

    <Progress size="150" progress="50" customContent="true">
        <svg width="80" height="80" viewBox="0 0 384 512"><path d="M184 80C126.7 80 80 126.7 80 184c0 13.25 10.75 24 24 24S128 197.3 128 184C128 153.1 153.1 128 184 128c13.25 0 24-10.75 24-24S197.3 80 184 80zM384 192c0-105.9-86.13-192-192-192S0 86.13 0 192c0 77.22 86.33 182.1 147.1 226.6l-32.1 57.78c-4.156 7.438-4.031 16.5 .2813 23.81C119.6 507.5 127.5 512 136 512h112c8.5 0 16.38-4.5 20.69-11.84c4.312-7.312 4.438-16.38 .2813-23.81l-32.1-57.78C297.7 374.1 384 269.2 384 192zM192 391.3C162.3 378 48 266.8 48 192c0-79.41 64.59-144 144-144s144 64.59 144 144C336 266.8 221.7 378 192 391.3z"/></svg>
    </Progress>  

  </div>

  <br>


  <style>
.showingrid {
    display: grid;
    place-items: center;
    place-content: center;
    grid-auto-flow: column;
    grid-gap: 2rem;
}

.darkmode {
    padding: 20px;
    background-color: #111;
 }
</style>

