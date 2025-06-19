function MainColumn({ children, title }) {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>{title}</p>
      </div>

      {children}
    </div>
  );
}

export default MainColumn;
