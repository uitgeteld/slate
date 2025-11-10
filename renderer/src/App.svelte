<script>
  import slateIcon from "../../assets/icons/slate.png";
  import { greet, appConfig } from './utils.js';
  console.log(greet('User'));
  console.log(appConfig.version);
</script>

<main>
  <img src={slateIcon} alt="Slate Icon" width="128" />
  <h1>Slate</h1>
  <p class="version">Version: {appConfig.version}</p>
</main>

<style lang="scss">
  $primary-color: #323232;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: $primary-color;
    color: #f5f5f5;
    font-family: system-ui, sans-serif;

    .version {
      color: #575757;
      font-weight: 200;
    }

    img {
      margin-bottom: 1rem;
    }
  }
</style>
