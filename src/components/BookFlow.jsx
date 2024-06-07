/*import React from 'react';
import Xarrow from 'react-xarrows';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Icon } from '@iconify/react';
import { darken } from '@mui/material/styles';
import { CalendarToday as CalendarTodayIcon } from '@mui/icons-material';


const BookFlow = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const primaryColor = theme.palette.primary.main;
  const highlightBgColor = `${primaryColor}33`;
  const highlightTextColor = theme.palette.primary.light;
  const nonHighlightedTextColor = theme.palette.text.primary;


  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ width: '102%', py: 6 }}>
      <Box display="flex" flexDirection="column" sx={{ width: '102%' }}>
        <WorkflowStep
          showDot
          dotId="dot1"
          isFirstStep
          description={
            <Box sx={{ bgcolor: theme.palette.primary.light, borderRadius: 2, p: 1.5, maxWidth: { xs: '100%', sm: '100%' }, whiteSpace: 'pre-line' }}>
              Input query/instructions
            </Box>
          }
        />
        <WorkflowStep
          icon="ri:search-line"
          description={
            <React.Fragment>
              <HighlightedText
                text="Analyse Statutes on "
                highlightWords={["Statutes"]}
                highlightBgColor={highlightBgColor}
                highlightTextColor={highlightTextColor}
                nonHighlightedTextColor={nonHighlightedTextColor}
              />

              <span style={{ color: nonHighlightedTextColor }}>
                <HighlightedText
                  text="query"
                  highlightWords={["query"]}
                  highlightBgColor={highlightBgColor}
                  highlightTextColor={highlightTextColor}
                  nonHighlightedTextColor={nonHighlightedTextColor}
                />
              </span>

              <HighlightedText
                text=" and find rules"
                highlightWords={["rules"]}
                highlightBgColor={highlightBgColor}
                highlightTextColor={highlightTextColor}
                nonHighlightedTextColor={nonHighlightedTextColor}
              />
            </React.Fragment>
          }
          showDot

        />
        <WorkflowStep
          icon="ri:draft-line"
          description={<HighlightedText text="Research SC judgments on query after 2010" highlightWords={["SC judgments", "query", "2010"]} highlightBgColor={highlightBgColor} highlightTextColor={highlightTextColor} nonHighlightedTextColor={nonHighlightedTextColor} />}
          showDot
        />
        <WorkflowStep
          icon="ri:book-mark-line"
          description={
            <React.Fragment>
              <HighlightedText
                text="Backcheck contract in "
                highlightWords={["contract"]}
                highlightBgColor={highlightBgColor}
                highlightTextColor={highlightTextColor}
                nonHighlightedTextColor={nonHighlightedTextColor}
              />
              <span style={{ color: nonHighlightedTextColor }}>
                <span style={{ position: 'relative', top: '0.2em' }}> 
                  <Icon
                    icon="ri:folder-line"
                    width={'1.2em'}
                    height={'1em'}
                    style={{ marginRight: '0.2em' }}
                 />
                </span>
                folder xy
              </span>
              <HighlightedText
                text=" for compliance"
                highlightWords={["compliance"]}
                highlightBgColor={highlightBgColor}
                highlightTextColor={highlightTextColor}
                nonHighlightedTextColor={nonHighlightedTextColor}
              />
            </React.Fragment>
          }
          showDot
          dotId="dot4"
        />
        <WorkflowStep
          icon="ri:menu-line"
          description={<HighlightedText text="Final deliverable Risk Memo" highlightWords={["Risk Memo"]} highlightBgColor={highlightBgColor} highlightTextColor={highlightTextColor} nonHighlightedTextColor={nonHighlightedTextColor} />}
          showDot
          dotId="dot5"
          isLastStep
        />
      </Box>

      <Xarrow
        start="dot1"
        end="dot4"
        color={primaryColor}
        strokeWidth={2}
        curveness={0.5}
        showHead={false}ChatAnswerMessage
        endAnchor="middle"
      />

      <Xarrow
        start="dot4"
        end="dot5"
        color={primaryColor}
        strokeWidth={2}
        curveness={0.5}
        dashness={true}
        showHead={false}
        endAnchor="middle"
      />
    </Box>
  );
};

const WorkflowStep = ({ icon, description, showDot, dotId, isFirstStep, isLastStep }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isIpadPro = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');
  const isLightTheme = theme.palette.mode === 'light';

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        py: '5px',
        px: '2%',
        mb: '11px',
        bgcolor: isFirstStep ? 'transparent' : theme.palette.background.paper,
        borderRadius: '0.5vw',
        boxShadow: isFirstStep ? 'none' : isLightTheme ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : theme.shadows[3],
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isLightTheme ? '0px 6px 24px rgba(0, 0, 0, 0.3)' : theme.shadows[6],
        },
        maxWidth: '100%',
        position: 'relative',
        marginLeft: isSmallScreen ? '35px' : '37px',
        ...(isLastStep && {
          marginTop: isIpadPro ? '8vh' : isSmallScreen ? '6vh' : '6vh',
        }),
        ...(isFirstStep && {
          marginTop: 0,
        }),
      }}
    >
      {showDot && (
        <Box
          id={dotId}
          sx={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            bgcolor: theme.palette.primary.main,
            boxShadow: `0 0 9px ${theme.palette.primary.main}`,
            position: 'absolute',
            left: {
              xs: '-40px',
              sm: '-40px',
              md: '-30px',
              lg: '-60px',
            },
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {icon && (
          <Icon
            icon={icon}
            width={'1.5em'}
            height={'1.5em'}
            style={{
              marginRight: '0.5em',
              verticalAlign: 'middle'
            }}
          />
        )}
        <Box>{description}</Box>
      </Box>
    </Box>
  );
};

const HighlightedText = ({ text, highlightWords, highlightBgColor, highlightTextColor, nonHighlightedTextColor }) => {
  const theme = useTheme();
  const adjustedHighlightTextColor = theme.palette.mode === 'light' ? darken(highlightTextColor, 0.7) : highlightTextColor;
  const adjustedHighlightBgColor = theme.palette.mode === 'light' ? darken(highlightBgColor, 0.5) : highlightBgColor;
  const parts = [];
  let lastIndex = 0;

  highlightWords.forEach(word => {
    const index = text.indexOf(word, lastIndex);
    if (index !== -1) {
      const before = text.slice(lastIndex, index);
      const highlighted = text.slice(index, index + word.length);
      parts.push(
        <React.Fragment key={`${before}-${highlighted}`}>
          <span style={{ color: nonHighlightedTextColor }}>{before}</span>
          <span style={{ backgroundColor: adjustedHighlightBgColor, color: adjustedHighlightTextColor, padding: '0 4px', borderRadius: '4px', margin: '0.15em 0', display: 'inline-flex', alignItems: 'center' }}>
            {highlighted}
            {word === "contract" ? (
              <Icon icon="fa-solid:file-contract" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "query" ? (
              <Icon icon="bi:pen" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "2010" ? (
              <CalendarTodayIcon style={{ fontSize: '1em', marginLeft: '0.3em' }} />
            ) : word === "Statutes" ? (
              <Icon icon="fa-solid:gavel" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "SC judgments" ? (
              <Icon icon="fa-solid:landmark" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "rules" ? (
              <Icon icon="fa-solid:tasks" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "compliance" ? (
              <Icon icon="fa-solid:shield-alt" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : word === "Risk Memo" ? (
              <Icon icon="fa-solid:exclamation-triangle" width="1em" style={{ marginLeft: '0.3em' }} />
            ) : (
              <Icon icon="akar-icons:chevron-down" width="1em" style={{ marginLeft: '0.3em' }} />
            )}
          </span>
        </React.Fragment>
      );
      lastIndex = index + word.length;
    }
  });

  parts.push(<span style={{ color: nonHighlightedTextColor }}>{text.slice(lastIndex)}</span>);

  return <>{parts}</>;
};

export default BookFlow;*/
