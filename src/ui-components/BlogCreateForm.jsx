/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBlog } from "../graphql/mutations";
const client = generateClient();
export default function BlogCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    slug: "",
    thumbnail: "",
    authorId: "",
    content: "",
    excerpt: "",
    tableOfContents: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    views: "",
    categoryId: "",
    featuredId: "",
    publishedAt: "",
    status: "",
    readTime: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [slug, setSlug] = React.useState(initialValues.slug);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [authorId, setAuthorId] = React.useState(initialValues.authorId);
  const [content, setContent] = React.useState(initialValues.content);
  const [excerpt, setExcerpt] = React.useState(initialValues.excerpt);
  const [tableOfContents, setTableOfContents] = React.useState(
    initialValues.tableOfContents
  );
  const [seoTitle, setSeoTitle] = React.useState(initialValues.seoTitle);
  const [seoDescription, setSeoDescription] = React.useState(
    initialValues.seoDescription
  );
  const [seoKeywords, setSeoKeywords] = React.useState(
    initialValues.seoKeywords
  );
  const [views, setViews] = React.useState(initialValues.views);
  const [categoryId, setCategoryId] = React.useState(initialValues.categoryId);
  const [featuredId, setFeaturedId] = React.useState(initialValues.featuredId);
  const [publishedAt, setPublishedAt] = React.useState(
    initialValues.publishedAt
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [readTime, setReadTime] = React.useState(initialValues.readTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setSlug(initialValues.slug);
    setThumbnail(initialValues.thumbnail);
    setAuthorId(initialValues.authorId);
    setContent(initialValues.content);
    setExcerpt(initialValues.excerpt);
    setTableOfContents(initialValues.tableOfContents);
    setSeoTitle(initialValues.seoTitle);
    setSeoDescription(initialValues.seoDescription);
    setSeoKeywords(initialValues.seoKeywords);
    setViews(initialValues.views);
    setCategoryId(initialValues.categoryId);
    setFeaturedId(initialValues.featuredId);
    setPublishedAt(initialValues.publishedAt);
    setStatus(initialValues.status);
    setReadTime(initialValues.readTime);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    slug: [{ type: "Required" }],
    thumbnail: [{ type: "Required" }],
    authorId: [{ type: "Required" }],
    content: [{ type: "Required" }],
    excerpt: [{ type: "Required" }],
    tableOfContents: [{ type: "Required" }, { type: "JSON" }],
    seoTitle: [{ type: "Required" }],
    seoDescription: [{ type: "Required" }],
    seoKeywords: [{ type: "Required" }],
    views: [],
    categoryId: [{ type: "Required" }],
    featuredId: [],
    publishedAt: [{ type: "Required" }],
    status: [{ type: "Required" }],
    readTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          slug,
          thumbnail,
          authorId,
          content,
          excerpt,
          tableOfContents,
          seoTitle,
          seoDescription,
          seoKeywords,
          views,
          categoryId,
          featuredId,
          publishedAt,
          status,
          readTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createBlog.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Slug"
        isRequired={true}
        isReadOnly={false}
        value={slug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug: value,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.slug ?? value;
          }
          if (errors.slug?.hasError) {
            runValidationTasks("slug", value);
          }
          setSlug(value);
        }}
        onBlur={() => runValidationTasks("slug", slug)}
        errorMessage={errors.slug?.errorMessage}
        hasError={errors.slug?.hasError}
        {...getOverrideProps(overrides, "slug")}
      ></TextField>
      <TextField
        label="Thumbnail"
        isRequired={true}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail: value,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <TextField
        label="Author id"
        isRequired={true}
        isReadOnly={false}
        value={authorId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId: value,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.authorId ?? value;
          }
          if (errors.authorId?.hasError) {
            runValidationTasks("authorId", value);
          }
          setAuthorId(value);
        }}
        onBlur={() => runValidationTasks("authorId", authorId)}
        errorMessage={errors.authorId?.errorMessage}
        hasError={errors.authorId?.hasError}
        {...getOverrideProps(overrides, "authorId")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content: value,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Excerpt"
        isRequired={true}
        isReadOnly={false}
        value={excerpt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt: value,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.excerpt ?? value;
          }
          if (errors.excerpt?.hasError) {
            runValidationTasks("excerpt", value);
          }
          setExcerpt(value);
        }}
        onBlur={() => runValidationTasks("excerpt", excerpt)}
        errorMessage={errors.excerpt?.errorMessage}
        hasError={errors.excerpt?.hasError}
        {...getOverrideProps(overrides, "excerpt")}
      ></TextField>
      <TextAreaField
        label="Table of contents"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents: value,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.tableOfContents ?? value;
          }
          if (errors.tableOfContents?.hasError) {
            runValidationTasks("tableOfContents", value);
          }
          setTableOfContents(value);
        }}
        onBlur={() => runValidationTasks("tableOfContents", tableOfContents)}
        errorMessage={errors.tableOfContents?.errorMessage}
        hasError={errors.tableOfContents?.hasError}
        {...getOverrideProps(overrides, "tableOfContents")}
      ></TextAreaField>
      <TextField
        label="Seo title"
        isRequired={true}
        isReadOnly={false}
        value={seoTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle: value,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.seoTitle ?? value;
          }
          if (errors.seoTitle?.hasError) {
            runValidationTasks("seoTitle", value);
          }
          setSeoTitle(value);
        }}
        onBlur={() => runValidationTasks("seoTitle", seoTitle)}
        errorMessage={errors.seoTitle?.errorMessage}
        hasError={errors.seoTitle?.hasError}
        {...getOverrideProps(overrides, "seoTitle")}
      ></TextField>
      <TextField
        label="Seo description"
        isRequired={true}
        isReadOnly={false}
        value={seoDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription: value,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.seoDescription ?? value;
          }
          if (errors.seoDescription?.hasError) {
            runValidationTasks("seoDescription", value);
          }
          setSeoDescription(value);
        }}
        onBlur={() => runValidationTasks("seoDescription", seoDescription)}
        errorMessage={errors.seoDescription?.errorMessage}
        hasError={errors.seoDescription?.hasError}
        {...getOverrideProps(overrides, "seoDescription")}
      ></TextField>
      <TextField
        label="Seo keywords"
        isRequired={true}
        isReadOnly={false}
        value={seoKeywords}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords: value,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.seoKeywords ?? value;
          }
          if (errors.seoKeywords?.hasError) {
            runValidationTasks("seoKeywords", value);
          }
          setSeoKeywords(value);
        }}
        onBlur={() => runValidationTasks("seoKeywords", seoKeywords)}
        errorMessage={errors.seoKeywords?.errorMessage}
        hasError={errors.seoKeywords?.hasError}
        {...getOverrideProps(overrides, "seoKeywords")}
      ></TextField>
      <TextField
        label="Views"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={views}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views: value,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.views ?? value;
          }
          if (errors.views?.hasError) {
            runValidationTasks("views", value);
          }
          setViews(value);
        }}
        onBlur={() => runValidationTasks("views", views)}
        errorMessage={errors.views?.errorMessage}
        hasError={errors.views?.hasError}
        {...getOverrideProps(overrides, "views")}
      ></TextField>
      <TextField
        label="Category id"
        isRequired={true}
        isReadOnly={false}
        value={categoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId: value,
              featuredId,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.categoryId ?? value;
          }
          if (errors.categoryId?.hasError) {
            runValidationTasks("categoryId", value);
          }
          setCategoryId(value);
        }}
        onBlur={() => runValidationTasks("categoryId", categoryId)}
        errorMessage={errors.categoryId?.errorMessage}
        hasError={errors.categoryId?.hasError}
        {...getOverrideProps(overrides, "categoryId")}
      ></TextField>
      <TextField
        label="Featured id"
        isRequired={false}
        isReadOnly={false}
        value={featuredId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId: value,
              publishedAt,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.featuredId ?? value;
          }
          if (errors.featuredId?.hasError) {
            runValidationTasks("featuredId", value);
          }
          setFeaturedId(value);
        }}
        onBlur={() => runValidationTasks("featuredId", featuredId)}
        errorMessage={errors.featuredId?.errorMessage}
        hasError={errors.featuredId?.hasError}
        {...getOverrideProps(overrides, "featuredId")}
      ></TextField>
      <TextField
        label="Published at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={publishedAt && convertToLocal(new Date(publishedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt: value,
              status,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.publishedAt ?? value;
          }
          if (errors.publishedAt?.hasError) {
            runValidationTasks("publishedAt", value);
          }
          setPublishedAt(value);
        }}
        onBlur={() => runValidationTasks("publishedAt", publishedAt)}
        errorMessage={errors.publishedAt?.errorMessage}
        hasError={errors.publishedAt?.hasError}
        {...getOverrideProps(overrides, "publishedAt")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status: value,
              readTime,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Draft"
          value="DRAFT"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Published"
          value="PUBLISHED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Archived"
          value="ARCHIVED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Read time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={readTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              slug,
              thumbnail,
              authorId,
              content,
              excerpt,
              tableOfContents,
              seoTitle,
              seoDescription,
              seoKeywords,
              views,
              categoryId,
              featuredId,
              publishedAt,
              status,
              readTime: value,
            };
            const result = onChange(modelFields);
            value = result?.readTime ?? value;
          }
          if (errors.readTime?.hasError) {
            runValidationTasks("readTime", value);
          }
          setReadTime(value);
        }}
        onBlur={() => runValidationTasks("readTime", readTime)}
        errorMessage={errors.readTime?.errorMessage}
        hasError={errors.readTime?.hasError}
        {...getOverrideProps(overrides, "readTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
