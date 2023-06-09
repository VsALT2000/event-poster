import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { EventCardType } from "../../../types";
import placeholder from "../../../assets/placeholder.jpg";
import { TagsContext } from "../../../App";
import { StyledButton } from "../../StyledControls/StyledControls";

import styles from "./EventCard.module.scss";

interface EventCardPropsType {
  event: EventCardType;
}

const EventCard: React.FC<EventCardPropsType> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Paper
        className={styles.card}
        elevation={2}
        onClick={() => navigate(`/event/${event.uuid}`)}
      >
        <div className={styles.coverContainer}>
          <img
            className={styles.cover}
            src={event.photo_cover || placeholder}
            alt="Обложка мероприятия"
          />
        </div>
        <div className={styles.cardInfo}>
          <Typography variant="h3" component="h3" sx={{ mt: 1.5, mb: 0.9 }}>
            {event.title || "Без названия"}
          </Typography>
          {event.tags_id && (
            <TagsContext.Consumer>
              {({ tags }) => (
                <Stack
                  direction={"row"}
                  flexWrap={"wrap"}
                  sx={{
                    gap: 1,
                    mb: 0.4,
                    overflow: "hidden",
                    maxHeight: "32px",
                  }}
                >
                  {event.tags_id.map((e) => (
                    <StyledButton
                      size={"small"}
                      sx={{ fontSize: 10, py: 0.5, px: 0.7 }}
                      variant={"outlined"}
                      key={e}
                    >
                      {tags[e]}
                    </StyledButton>
                  ))}
                </Stack>
              )}
            </TagsContext.Consumer>
          )}
          <div className={styles.company}>
            <Typography variant="body1">
              {event.responsible_name} {event.responsible_surname}
            </Typography>
          </div>
          <Typography
            variant="body1"
            sx={{
              textAlign: "right",
              mt: 1,
              fontWeight: 300,
            }}
            gutterBottom
          >
            {event.city
              ? `${event.city.substring(0, 1)}${event.city
                  .substring(1)
                  .toLowerCase()}`
              : "Неизвестно"}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "right" }} gutterBottom>
            {event.date_start && event.date_end
              ? `С ${new Date(
                  event.date_start,
                ).toLocaleDateString()} по ${new Date(
                  event.date_end,
                ).toLocaleDateString()}`
              : "Без даты"}
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default EventCard;
