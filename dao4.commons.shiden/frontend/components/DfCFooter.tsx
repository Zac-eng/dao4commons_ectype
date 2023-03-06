import { createStyles, Container, Group, ActionIcon, Text } from '@mantine/core';
import { Twitter, Youtube, Instagram } from 'react-feather';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function DfCFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text color="dimmed" size="sm">
          © 2023 realtakahashi.inc All rights reserved.
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <Twitter size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <Youtube size={25} />
          </ActionIcon>
          <ActionIcon size="lg" >
            <Instagram size={25} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}