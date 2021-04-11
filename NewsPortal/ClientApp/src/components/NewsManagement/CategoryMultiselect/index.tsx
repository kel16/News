import {
  Button,
  Chip,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getCategoriesSelector } from "store/categories/selectors";
import { ICategory, ISubcategory } from "store/categories/types";
import { styles } from "./styles";

const maxLimitSubcategories = 3;

interface IProps extends WithStyles<typeof styles> {}

const CategoryMultiselect = withStyles(styles)(({ classes }: IProps) => {
  const { categories } = useSelector(getCategoriesSelector);

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<ISubcategory | null>(
    categories[0].subcategories[0]
  );

  const activeCategoryTitle = useMemo(() => activeSubcategory?.title || activeCategory.title, [
    activeCategory,
    activeSubcategory,
  ]);

  const onChangeCategory = (category: ICategory) => {
    setActiveCategory(category);

    category.subcategories.length
      ? setActiveSubcategory(category.subcategories[0])
      : setActiveSubcategory(null);
  };

  const isAddDisabled =
    selectedSubcategories.includes(activeCategoryTitle) ||
    selectedSubcategories.length === maxLimitSubcategories;

  const onAdd = () => {
    !selectedSubcategories.includes(activeCategoryTitle) &&
      setSelectedSubcategories([...selectedSubcategories, activeCategoryTitle]);
  };

  const onDelete = () =>
    setSelectedSubcategories(
      selectedSubcategories.filter((subcategory) => subcategory !== activeCategoryTitle)
    );

  return (
    <Grid container className={classes.wrapper}>
      <Grid container item>
        <Typography variant="h5" gutterBottom>
          Select up to 3 subcategories you wish to publish your news in
        </Typography>
      </Grid>
      <Grid container item justify="space-between" className={classes.wrapper}>
        <Grid item>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="select"
            value={activeCategory.title}
            className={classes.select}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.title}
                value={category.title}
                onClick={() => onChangeCategory(category)}
              >
                {category.title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {activeSubcategory && (
          <Grid item>
            <InputLabel id="subcategory">Subcategory</InputLabel>
            <Select
              labelId="subcategory"
              id="select"
              value={activeSubcategory.title}
              className={classes.select}
            >
              {activeCategory?.subcategories.map((subcategory) => (
                <MenuItem
                  key={subcategory.id}
                  value={subcategory.title}
                  onClick={() => setActiveSubcategory(subcategory)}
                >
                  {subcategory.title}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        )}
      </Grid>
      <Grid container justify="space-between" className={classes.wrapper}>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Typography color={selectedSubcategories.length ? "primary" : "error"}>
              Selected categories: {!selectedSubcategories.length && "none"}
            </Typography>
            {selectedSubcategories?.map((subcategory) => (
              <Chip
                key={subcategory}
                label={subcategory}
                onDelete={onDelete}
                className={classes.chip}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={isAddDisabled}
            startIcon={<AddIcon />}
            onClick={onAdd}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default CategoryMultiselect;
