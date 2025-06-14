import { ParentComponent } from "solid-js";
import Container from "~/components/Container";
import Header from "~/components/Header";
import { cn } from "~/utils/class-name";

const GlobalLayout: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div class={cn("h-full", props.class)}>
      <div class="fixed top-6 z-30 w-full">
        <Container>
          <Header />
        </Container>
      </div>

      {props.children}
      {/* TODO: Add footer */}
    </div>
  );
};

export default GlobalLayout;
