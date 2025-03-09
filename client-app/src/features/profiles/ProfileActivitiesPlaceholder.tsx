import {
  Placeholder,
  Card,
  CardContent,
  PlaceholderHeader,
  PlaceholderImage,
  PlaceholderLine,
  PlaceholderParagraph,
} from "semantic-ui-react";

export default function ProfileActivitiesPlaceholder() {
  return (
    <Card>
      <Placeholder style={{ height: 100 }}>
        <PlaceholderImage rectangular />
      </Placeholder>

      <CardContent>
        <Placeholder>
          <PlaceholderHeader>
            <PlaceholderLine length="very short" />
            <PlaceholderLine length="medium" />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length="short" />
          </PlaceholderParagraph>
        </Placeholder>
      </CardContent>
    </Card>
  );
}
