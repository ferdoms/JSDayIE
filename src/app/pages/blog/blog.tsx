import React from "react";
import { Fetchable } from "react-fetchable";
import { Spinner, Section, Card, CardHeader, CardBody, CardFooter, Container, Button, Link } from "../../../lib/components";
import { blogEntryArrayValidator, BlogEntryArray, IBlogEntry } from "../../../lib/domain/types";
import { PATHS } from "../../config/routing";

interface BlogEntryPreviewProps {
  details: IBlogEntry;
}

function BlogEntryPreview(props: BlogEntryPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{props.details.title}</h3>
        {new Date(Date.parse(props.details.date)).toDateString()}
      </CardHeader>
      <CardBody>
        <img src={props.details.thumbnail}/>
        <br/>
        <br/>
        <p>{props.details.summary}</p>
      </CardBody>
      <CardFooter>
        <Link to={PATHS.blogEntry.replace(":id", props.details.id)}>Read more</Link>
      </CardFooter>
    </Card>
  );
}

interface BlogPostsProps {
  limit?: number;
}

export function BlogPosts(props: BlogPostsProps) {
  return (
    <Section title="Blog" size={1}>
      <p>Here you will find the latest news about JSDayIE</p>
      <Fetchable
          url="/data/blog_entries.json"
          validator={blogEntryArrayValidator}
          loading={() => <Spinner size={100}/>}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={(blogEntries: BlogEntryArray) => {

            const entries = props.limit !== undefined && blogEntries.length > props.limit ?
              blogEntries.slice(0, props.limit) : blogEntries;

            const sortedEntries = entries.filter(p => p.visible === true)
              .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

            return (
              <div className="row">
                {
                  sortedEntries.map((blogEntry, blogEntryIndex) => (
                    <div key={blogEntryIndex} className="col-md-6">
                      <BlogEntryPreview details={blogEntry} />
                    </div>
                  ))
                }
              </div>
            );
          }}
      />
    </Section>
  );
}

export function BlogPreview() {
  return (
    <Container>
      <BlogPosts limit={2} />
      <div className="center">
        <Link to={PATHS.blog}>Visit our blog</Link>
      </div>
    </Container>
  );
}

export class Blog extends React.Component {
  render() {
    return (
      <Container>
        <BlogPosts/>
      </Container>
    );
  }
}
