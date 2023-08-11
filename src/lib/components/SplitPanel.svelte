<section>
  <div>
    <article>
      <slot name="first"/>
    </article>
    <article>
      <slot name="second"/>
    </article>
  </div>
</section>

<style>
  div {
    display: flex;
    justify-content: space-around;
  }

  div > article {
    width: 50vw;
  }
</style>