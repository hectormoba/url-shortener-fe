<script lang="ts" setup>
type TypographyType = "italic" | "bold" | "underline" | "normal";
type TypograpohtPropsType = TypographyType | Array<TypographyType>;

interface TypographyProps {
  variant?: "title1" | "title2" | "p1" | "p2" | "subt1" | "subt2";
  align?: "left" | "center" | "right";
  noMargin?: boolean;
  type?: TypograpohtPropsType;
}
</script>
