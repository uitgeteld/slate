<script>
  import slateIcon from "../../assets/icons/slate.png";
</script>

<main>
  <img src={slateIcon} alt="Slate Icon" width="128" />
  <h1>Slate</h1>
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

    img {
      margin-bottom: 1rem;
    }
  }
</style>
